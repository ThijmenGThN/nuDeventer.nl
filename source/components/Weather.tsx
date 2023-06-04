
export default function Component() {

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <span className="inline-flex uppercase items-center rounded-md bg-blue-100 px-3 py-1 font-medium text-blue-600">
                    +3 uur
                </span>
                <span className='text-xl font-semibold'>Neerslag</span>
            </div>

            <div className="flex gap-8">
                <div className="rounded-lg overflow-hidden aspect-square w-[256px] h-[256px]">
                    <iframe
                        src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.255&lng=6.16389&overname=2&zoom=13&naam=Deventer&size=2&voor=1"
                        width="256"
                        height="256"
                    />
                </div>
            </div>
        </div>
    )
}
