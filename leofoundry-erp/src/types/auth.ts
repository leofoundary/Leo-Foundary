export type UserRole =
  | "STUDENT"
  | "PARENT"
  | "PRINCIPAL"
  | "ADMIN"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}