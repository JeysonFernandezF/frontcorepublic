import { watch } from "vue"

export function useFormError<T extends Record<string, any>>(form: T, fields: string[]) {
  fields.forEach(field => {
    watch(() => form[field], () => {
      const errorKey = `error_${field}`
      if (form[errorKey]) (form as any)[errorKey] = false
    })
  })
}
