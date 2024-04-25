import { CardContent } from "../../data/card";
import { Card } from "../componentsStyled/CardStyled";
import { Figure } from "../componentsStyled/FigureStyled";

interface CardProps {
    lista: CardContent[]
}

export function CardComponents(props: CardProps) {
    return (
        <>
            {props.lista.map((item, index) => (
                <Card key={index}>
                    <Figure $img={item.img}></Figure>
                    <h1>{item.titulo}</h1>
                    <p>{item.text}</p>
                </Card>
            ))}
        </>
    )
}

