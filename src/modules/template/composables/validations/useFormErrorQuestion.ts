import { watch } from 'vue'

export function useFormErrorQuestion<T extends { [key: string]: any }>(
  array: T[],
  field: keyof T,
  errorField: keyof T
) {
  watch(
    () => array.map(item => item[field]),
    (newVals, oldVals) => {
      array.forEach((item, i) => {
        if (item[errorField] && newVals[i] !== oldVals?.[i]) {
          (item as any)[errorField] = false
        }
      })
    },
    { deep: true }
  )
}
