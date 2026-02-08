import Image from 'next/image'

interface Facility {
  title: string;
  price: string;
  period: string;
  description: string;
  image?: string;
}

interface FasilitasSectionProps {
  title?: string;
  totalPrice?: string;
  totalPeriod?: string;
  facilities?: Facility[];
}

const FasilitasSection: React.FC<FasilitasSectionProps> = ({
  title = "Bonus Dan Fasilitas Yang Didapatkan Setelah Bergabung Menjadi Member",
  totalPrice = "Rp 29.999.000",
  totalPeriod = "/tahun",
  facilities = []
}) => {
  return (
    <section className="bg-black text-white px-6 md:px-[70px] py-12 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <div key={index} className="border border-gray-600 rounded-2xl p-6 md:p-8">
              {/* Image */}
              <div className="flex justify-center mb-6">
                {facility.image ? (
                  <div className="w-full h-48 md:h-[356px] relative bg-gray-300 rounded-xl shadow-sm overflow-hidden">
                    <Image 
                      src={facility.image} 
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 md:h-[356px] bg-gray-300 rounded-xl shadow-sm" />
                )}
              </div>
              
              {/* Number and title */}
              <div className="mb-4">
                <p className="text-[#3B82F6] font-bold text-2xl mb-2">{index + 1}. {facility.title}</p>
              </div>

              {/* Senilai label and price */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">Senilai :</p>
                <p className="text-green-500 font-bold text-lg">
                  {facility.price} <span className="text-gray-400">{facility.period}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Total price section */}
        <div className="text-center pt-4">
          <p className="text-gray-400 text-base mb-2">Total Value yang kamu dapatkan :</p>
          <p className="text-green-500 font-bold text-2xl md:text-3xl">
            {totalPrice}<span className="text-gray-400">{totalPeriod}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FasilitasSection