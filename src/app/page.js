import Link from "next/link";
import {
  IconBuildingHospital,
  IconStethoscope,
  IconUser
} from '@tabler/icons-react'
import AppSlider from "@/components/AppSlider";

export const revalidate = 60
export default function Home() {
  return (
    <div className="py-5 h-full">
      <div className="grid grid-cols-1 gap-5">
        <AppSlider />
        <div className="grid grid-cols-3 gap-3">
          <div className="card p-10 bg-gray-100 shadow-lg flex items-center flex-col">
            <IconStethoscope size={ 48 } />
            <div className="card-actions justify-center my-5">
              <Link href="/profissionais" className="btn btn-primary btn-outline">Médicos</Link>
            </div>
          </div>
          <div className="card p-10 bg-gray-100 shadow-lg flex items-center flex-col">
            <IconBuildingHospital size={ 48 } />
            <div className="card-actions justify-center my-5">
              <Link href="/laboratorios" className="btn btn-primary btn-outline">Laboratórios</Link>
            </div>
          </div>
          <div className="card p-10 bg-gray-100 shadow-lg flex items-center flex-col">
            <IconUser size={ 48 } />
            <div className="card-actions justify-center my-5">
              <Link href="/parceiros" className="btn btn-primary btn-outline">Parceiros</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
