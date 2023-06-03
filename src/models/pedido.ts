export default interface Pedido {
  id: string;
  numero: number;
  cliente: string;
  itens: ItemPedido[];
  pagamentos: Pagamento[];
}

export interface ItemPedido {
  id: string;
  quantidade: number;
  produto: string;
  valorUnitario: number;
}

export interface Pagamento {
  id: string;
  valor: number;
  formaPagamento: string;
}
