import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Rent Rover | Find the perfect Rental',
    description: 'Find Your Dream Rental Property',
    keywords : 'Rental, find rentals, find properties, rent'

}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
        <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout