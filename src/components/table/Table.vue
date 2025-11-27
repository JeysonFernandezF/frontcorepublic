<script setup lang="ts">
import type { PropType } from "vue";
import TableStatus from "./TableStatus.vue";
import IconLoader from "../icons/loader/IconLoader.vue";

type Column = {
  key: string;
  label: string;
  center?:boolean;
};

const props = defineProps({
  loading: {
    type:Boolean,
    required:true,
    default:false
  },
  columns: {
    type: Array as PropType<Column[]>,
    required: true,
  },
  rows: {
    type: Array as PropType<Record<string, any>[]>,
    required: true,
  },
  actions:{
    type: Boolean,
    required:false,
    default:false
  },
  noData:{
    type:String,
    default:'No hay datos para mostrar'
  }

});
</script>

<template>
  <div class="card-table">
    <table>
      <thead >
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
          >
            <p :class="{'text-center':col.center}">{{ col.label }}</p>
          </th>
          <th
            v-if="actions"
          >
            <p class="text-center">Acciones</p>
          </th>
        </tr>
      </thead>

      <tbody>

        <template v-if="rows.length > 0">
          <tr
            v-for="(row, i) in rows"
            :key="i"
          >
            <td
              v-for="(col,index) in columns"
              :key="col.key"
              :class="{
                'text-center':col.center,
                'font-bold':index == 0
              }"
            >
              <template v-if="col.key == 'status'">
                <TableStatus :name="row[col.key]"/>
              </template>
              <template v-else>
                {{ row[col.key] }}
              </template>
            </td>
            <td class="actions" v-if="actions">
              <slot name="actions" :row="row"></slot>
            </td>
          </tr>
        </template>
        <template v-else-if="loading">
          <tr >
            <td :colspan="columns.length + (actions ? 1 : 0)" >
              <div class="flex justify-center items-center">
                <IconLoader />
              </div>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr >
            <td :colspan="columns.length + (actions ? 1 : 0)" >
              <div class="flex justify-center items-center">
                <p>{{ noData }}</p>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.card-table{
  overflow-x: auto;
  width: 100%;
  border-radius: 15px;

  background-color: white;
  table{
    width: 100%;

    thead{

      tr{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      th{

        text-align: left;
        padding: 36px 36px 16px 36px;
        font-weight: bold;
        font-size: 12px;
        color:#4B4B4B;

      }
    }
    tbody{
      tr:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      td{
        padding: 16px 36px;
        color:#4B4B4B;
      }
      .actions{
        display: flex;
        justify-content: center;
        align-items: center;

        gap:10px
      }
    }
  }
}
</style>
