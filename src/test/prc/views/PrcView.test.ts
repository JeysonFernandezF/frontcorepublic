import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import PrcView from '@/modules/prc/views/PrcView.vue'

// Mock router
const mockPush = vi.fn()
const mockRoute = { params: { id: '123' } }

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: mockPush }),
  useRoute: () => mockRoute,
}))

// Mock hijos
vi.mock('@/components/layouts/TopSection.vue', () => ({ default: { template: '<div>TopSection</div>' } }))
vi.mock('@/modules/prc/components/Details.vue', () => ({ default: { template: '<div>Details</div>' } }))
vi.mock('@/components/icons/loader/IconLoaderPage.vue', () => ({ default: { template: '<div>Loader</div>' } }))

// Variable global para el mock del composable
let mockGetPrcById = vi.fn()

vi.mock('@/modules/prc/composables/usePrc', () => ({
  usePrc: () => ({
    prc: mockPrc,          // ⚠ Se define dinámicamente en cada test
    loadingPrc: mockLoading,
    getPrcById: mockGetPrcById,
  }),
}))

let mockPrc: any
let mockLoading: any

describe('PrcView.vue', () => {

  it('renders the component when PRC exists', () => {
    mockPrc = ref({ id: 123, name: 'Test PRC' })
    mockLoading = ref(false)

    const wrapper = mount(PrcView)

    expect(wrapper.text()).toContain('TopSection')
    expect(wrapper.text()).toContain('Details')
    expect(wrapper.text()).not.toContain('Loader')
  })

  it('shows loader when PRC does not exist', () => {
    mockPrc = ref(null)
    mockLoading = ref(false)

    const wrapper = mount(PrcView)

    expect(wrapper.text()).not.toContain('TopSection')
    expect(wrapper.text()).not.toContain('Details')
    expect(wrapper.text()).toContain('Loader')
  })
})
