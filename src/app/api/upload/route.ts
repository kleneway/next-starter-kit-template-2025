import { NextResponse } from 'next/server'
import { uploadFile } from '@/lib/storage'

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 })

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const url = await uploadFile(file.name, buffer)
  return NextResponse.json({ url })
}
