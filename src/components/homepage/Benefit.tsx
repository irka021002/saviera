import Money from "../../assets/icon/money.svg"
import Leaf from "../../assets/icon/leaf.svg"
import DNA from "../../assets/icon/dna.svg"
export default function Benefit(){
    return(
        <div className="py-[120px]">
            <div className="justify-center grid grid-cols-[repeat(4,minmax(0,78px))] md:grid-cols-[repeat(12,minmax(0,78px))] gap-[24px]">
                <div className="col-span-4 text-center px-6 py-14 rounded">
                    <img className="m-auto" src={Money} alt="Money Icon" />
                    <h2 className="text-2xl font-montserrat mb-3 mt-6">Secure Transactions</h2>
                    <p>Get a 1-on-1 order payment through WhatsApp.</p>
                </div>
                <div className="col-span-4 text-center px-6 py-11 rounded">
                    <img className="m-auto" src={Leaf} alt="leaf Icon" />
                    <h2 className="text-2xl font-montserrat mb-3 mt-6">Sustainable Packaging</h2>
                    <p>Receive your order in a fully recycled and compostable bag. Learn how to reuse and recycle your packaging <span className="text-accent-1 underline">here</span>.</p>
                </div>
                <div className="col-span-4 text-center px-6 py-8 rounded">
                    <img className="m-auto" src={DNA} alt="DNA Icon" />
                    <h2 className="text-2xl font-montserrat mb-3 mt-6">Co-create is in Our DNA</h2>
                    <p>Got any ideas for collaboration or inventions?<br />Email at <span className="underline">fairy@saviera.co</span> withthe subject “Hot Stuff”</p>
                </div>
            </div>
        </div>
    )
}