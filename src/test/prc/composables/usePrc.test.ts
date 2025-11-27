// src/test/prc/composables/usePrc.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { usePrc } from '@/modules/prc/composables/usePrc'

// ------------------------
// Mocks
// ------------------------

// Mock de Pinia store
const mockSetPrc = vi.fn()
const mockPrc = ref(null)
vi.mock('@/stores/prc/prc.store', () => ({
  usePrcStore: () => ({
    prc: mockPrc,
    setPrc: mockSetPrc,
  }),
}))

// Mock de API
vi.mock('@/utils/api/prc/prc.service', () => ({
  fetchGetPrcById: vi.fn((id) => Promise.resolve({ data: { id, name: 'Test PRC' } })),
  fetchGetPrcs: vi.fn(),
  fetchDeletePrc: vi.fn(),
}))

import { fetchGetPrcById } from '@/utils/api/prc/prc.service'
(fetchGetPrcById as any).mockImplementation((id: number) => {
  if (id < 0) {
    return Promise.reject(new Error('API error'))
  }
  return Promise.resolve({ data: { id, name: 'Test PRC' } })
})


describe('usePrc composable', () => {
  beforeEach(() => {
    mockSetPrc.mockClear()
    ;(mockPrc.value as any) = null
  })

  it('initial refs exist', () => {
    const { prc, loadingPrc, deleteLoading, deleteConfirm } = usePrc()

    expect(prc).toBeDefined()
    expect(loadingPrc.value).toBe(false)
    expect(deleteLoading.value).toBe(false)
    expect(deleteConfirm.value).toBe(false)
  })

  it('getPrcById updates store and loading state', async () => {
    const { loadingPrc, getPrcById } = usePrc()

    const promise = getPrcById(123)

    // Mientras está ejecutando la llamada, loadingPrc debe ser true
    expect(loadingPrc.value).toBe(true)

    await promise

    // Después de la llamada
    expect(loadingPrc.value).toBe(false)
    expect(fetchGetPrcById).toHaveBeenCalledWith(123)
    expect(mockSetPrc).toHaveBeenCalledWith({ id: 123, name: 'Test PRC' })
  })


  it('does not update store if API fails due to negative id', async () => {
    const { getPrcById, loadingPrc } = usePrc()

    await expect(getPrcById(-5)).rejects.toThrow('API error')

    // loadingPrc debe volver a false aunque la API falle
    expect(loadingPrc.value).toBe(false)

    // El store no debe actualizarse
    expect(mockSetPrc).not.toHaveBeenCalled()
  })
})
