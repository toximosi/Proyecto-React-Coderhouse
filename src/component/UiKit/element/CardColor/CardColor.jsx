import './CardColor.scss';

function CardColor({bg="#ffffff"}) {
    return (
        <div className="CardColor">
            <div className="color" style={{ backgroundColor: bg }}>
            </div>
        </div>   
    )
};
export default CardColor;


