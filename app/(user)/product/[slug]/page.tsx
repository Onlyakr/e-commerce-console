const Product = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <div>Product : {slug}</div>;
};
export default Product;
