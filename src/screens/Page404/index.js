import Menu from "../../containers/Menu";
import Wrapper from "../../components/Wrapper";
import { LargeText } from "../../components/Typography";

const Page404 = function () {
    return (
        <div className='shop-page404'>
            <Menu/>
            <Wrapper>
                <LargeText>404 Page not found</LargeText>
            </Wrapper>
        </div>
    )
}
export default Page404;