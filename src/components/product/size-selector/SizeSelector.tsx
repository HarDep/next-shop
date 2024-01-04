import { Size } from "@/libs/definitions"
import clsx from "clsx"

export const SizeSelector = ({ availableSizes, selectedIndex = 0 }: { availableSizes: Size[], selectedIndex?: number }) => {
    return (
        <div className="my-5">
            <h3 className="font-bold mb-4">Tallas disponibles:</h3>
            <div className="flex">
                {
                    availableSizes.map((size, index) => (
                        <button key={size} className={
                            clsx(
                                "mx-2 hover:underline text-lg",
                                {
                                    'underline': index === selectedIndex,
                                }
                            )
                        }>{size}</button>
                    ))
                }
            </div>
        </div>
    )
}
