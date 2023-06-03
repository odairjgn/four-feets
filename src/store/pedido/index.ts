import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Pedido, { ItemPedido, Pagamento } from "../../models/pedido";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE: Pedido = {
  id: "",
  numero: 0,
  cliente: "",
  itens: [],
  pagamentos: [],
};

const pedidoSlice = createSlice({
  name: "pedido",
  initialState: INITIAL_STATE,
  reducers: {
    novoPedido: novoPedidoAction,
    addItem: addItemAction,
    removeItem: removeItemAction,
    editItem: editItemAction,
    addPagamento: addPagamentoAction,
    removePagamento: removePagamentoAction,
    saveStore: saveStoreAction,
    loadStore: loadStoreAction,
  },
});

function novoPedidoAction(state: Pedido) {
  state = INITIAL_STATE;
  state.id = uuidv4();
}

function addItemAction(state: Pedido, action: PayloadAction<ItemPedido>) {
  state.itens.push(action.payload);
}

function removeItemAction(state: Pedido, action: PayloadAction<string>) {
  state.itens = state.itens.filter((item) => item.id !== action.payload);
}

function editItemAction(state: Pedido, action: PayloadAction<ItemPedido>) {
  state.itens = state.itens.map((item) =>
    item.id === action.payload.id ? action.payload : item
  );
}

function addPagamentoAction(state: Pedido, action: PayloadAction<Pagamento>) {
  state.pagamentos.push(action.payload);
}

function removePagamentoAction(state: Pedido, action: PayloadAction<string>) {
  state.pagamentos = state.pagamentos.filter(
    (pagamento) => pagamento.id !== action.payload
  );
}

function saveStoreAction(state: Pedido) {
  localStorage.setItem("pedido", JSON.stringify(state));
}

function loadStoreAction(state: Pedido) {
  const pedido = localStorage.getItem("pedido");
  state = pedido ? JSON.parse(pedido) : INITIAL_STATE;
}

export const {
  novoPedido,
  addItem,
  removeItem,
  editItem,
  addPagamento,
  removePagamento,
  loadStore,
  saveStore,
} = pedidoSlice.actions;
export default pedidoSlice;
