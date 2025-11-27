// src/test/prc/composables/usePrcs.realStore.test.ts
import type { Prc } from '@/types/prc/prc';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { usePrcs } from '@/modules/prc/composables/usePrcs';
import * as prcService from '@/utils/api/prc/prc.service';
import { setActivePinia, createPinia } from 'pinia';

// ------------------------
// Datos de prueba tipo Prc
// ------------------------
/*const prcList: Prc[] = [
  {
    id: 0,
    name: 'Test PRC',
    start_date: '2025-10-11',
    status: 'active',
    form: { id: 1, name: 'Prueba' },
    program_detail: {
      activity: { id: 1, name: 'Act' },
      equipment: { id: 1, name: 'Equip' },
      worksite: { id: 1, name: 'Sitio' },
      position: { id: 1, name: 'Pos' },
      department: { id: 1, name: 'Dep' },
      observed_task: { id: 1, name: 'Obs' },
      management: { id: 1, name: 'Man' },
      company: { id: 1, name: 'Comp' },
    },
  },
];

// ------------------------
// Mocks API
// ------------------------
vi.spyOn(prcService, 'fetchGetPrcs').mockImplementation(() =>
  Promise.resolve({ data: prcList })
);

vi.spyOn(prcService, 'fetchDeletePrc').mockImplementation(() =>
  Promise.resolve(true)
);

// ------------------------
// Tests
// ------------------------
describe('usePrcs composable (store real)', () => {
  beforeEach(() => {
    setActivePinia(createPinia()); // reinicia Pinia antes de cada test
  });

  it('getPrcs guarda exactamente un objeto Prc', async () => {
    const { getPrcs, prcList: prcStoreList } = usePrcs();

    await getPrcs();

    // La store debe tener exactamente un Prc
    expect(prcStoreList.value).toHaveLength(1);
    expect(prcStoreList.value[0]).toEqual(prcList[0]);
  });

  it('deletePrc borra un prc y refresca la lista', async () => {
    const { deletePrc, prcList: prcStoreList } = usePrcs();

    await deletePrc(0);

    // Después de delete, la lista debería volver a contener el mismo Prc mock
    expect(prcStoreList.value).toHaveLength(1);
    expect(prcStoreList.value[0]).toEqual(prcList[0]);
  });
});
*/
