export default function SectionHeaders({subHeader, mainHeader}) {
    return(
        <>
        <h3 className="uppercase text-gray-600 font-semibold left-4">
                  {subHeader}
                </h3>
                <h2 className="text-primary font-bold text-4xl italic">
                  {mainHeader}
                </h2>
        </>
    );
}