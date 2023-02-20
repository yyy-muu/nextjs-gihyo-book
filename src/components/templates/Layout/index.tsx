import Separator from '/src/components/atoms/Separator'
import Box from '/src/components/layout/Box'
import Footer from '/src/components/organisms/Footer'
import Header from '/src/components/organisms/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Separator />
      <Box padding={3}>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
