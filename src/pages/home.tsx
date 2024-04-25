import { CardComponents } from "../components/componentsFunctional/Card";
import { Banner } from "../components/componentsStyled/BannerStyled";
import { Container } from "../components/componentsStyled/ContainerStyled";
import { listaCardsHome } from "../data/card";
import { Button } from "../components/componentsStyled/ButtonStyled";
import { Footer } from "../components/componentsStyled/FooterStyled";



export function Home() {
    return (
        <>           
            <Banner>
                <div>
                    <h1>CuriousCat</h1>
                    <p>Cuide com carinho, eles merecem todo o nosso amor e atenção!</p>
                </div>
            </Banner>
            
            <Container $backgroundColor="rgb(25, 25, 25)" $display="flex" $justifyContent="space-around" $fluid $wrap> 
                <CardComponents lista={listaCardsHome} />   
            </Container>

            <Container $backgroundColor="rgb(25, 25, 25)" $display="flex" $justifyContent="center" $height="200px" $alignItems="center" $fluid >
                <Button>Clique aqui e deixe seu depoimento</Button> 
            </Container>

            <Footer>
                Developed by Geverton Soares 2024
            </Footer>
        </>
    )
}