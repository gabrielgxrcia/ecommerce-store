import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/product-list"

export const revalidade = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard("53efd6d1-2964-443c-9755-5e97d32e39a1")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  )
}

export default HomePage
