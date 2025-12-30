const Order = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Order : {id}</div>;
};
export default Order;
