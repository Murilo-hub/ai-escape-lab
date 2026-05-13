export type Message = {
  role: 'user' | 'assistant'
  content: string
}

export type Room = 'lab' | 'corridor' | 'server_room' | 'exit'

export type RoomInfo = {
  emoji: string
  name: string
  description: string
}

export type Session = {
  id: string
  current_room: Room
  messages: Message[]
  inventory: string[]
  created_at: string
  updated_at: string
}
