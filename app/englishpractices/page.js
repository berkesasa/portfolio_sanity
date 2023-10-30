import Kart from '../components/englishcards/Kart'
import data from '/data.json'
import palette from '/colorspalette.json'

export default function EnglishPractices() {
    return (
        <div className="flex justify-center items-center lg:min-h-[calc(80vh)] max-lg:mt-24">
            <Kart data={data} palette={palette} />
        </div>
    );
}