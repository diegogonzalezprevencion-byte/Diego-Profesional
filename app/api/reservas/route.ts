import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("reservas")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, reservas: data });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = ["area", "servicio", "fecha", "hora", "nombre", "email", "telefono"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ ok: false, error: `Falta el campo ${field}` }, { status: 400 });
      }
    }

    const { data: existingReservation } = await supabaseAdmin
      .from("reservas")
      .select("id")
      .eq("area", body.area)
      .eq("fecha", body.fecha)
      .eq("hora", body.hora)
      .neq("estado", "cancelada")
      .maybeSingle();

    if (existingReservation) {
      return NextResponse.json({ ok: false, error: "Este horario ya fue reservado." }, { status: 409 });
    }

    const { data, error } = await supabaseAdmin
      .from("reservas")
      .insert({
        area: body.area,
        servicio: body.servicio,
        fecha: body.fecha,
        hora: body.hora,
        nombre: body.nombre,
        email: body.email,
        telefono: body.telefono,
        estado: "pendiente"
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, reserva: data }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: "No se pudo procesar la solicitud." }, { status: 400 });
  }
}
