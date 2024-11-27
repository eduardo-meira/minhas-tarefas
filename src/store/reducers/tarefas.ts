import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript e depois desenhar',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'Estudar e cagar bem devagar depois',
      prioridade: enums.Prioridade.NORMAl,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar TypeScript'
    },
    {
      id: 3,
      descricao: 'Estudar anatomia feminina',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar biologia'
    }
  ]
}

export const tarefasSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const IndexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (IndexDaTarefa >= 0) {
        state.itens[IndexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('já existe uma tarefa com essse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const IndexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (IndexDaTarefa >= 0) {
        state.itens[IndexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
