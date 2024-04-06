
export default function List({items}) {
    return (
        <div>
           
        {items.map((item, index) => (
            <p key={index}> {item} </p>
        ))}
            
        </div>
    );
}

