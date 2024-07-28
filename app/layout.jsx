import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


export const metadata = {
    title: 'Rent Rover | Find the perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords : 'Rental, find rentals, find properties, rent'

}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
        </body>
    </html>
  )
}

export default MainLayout