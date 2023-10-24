import Kart from '../components/englishcards/Kart'
import data from '/data.json'
import palette from '/colorspalette.json'

export default function EnglishPractices() {
    return (
        <div className="flex justify-center items-center h-[calc(80vh)]">
            <Kart data={data} palette={palette} />
        </div>
    );
}