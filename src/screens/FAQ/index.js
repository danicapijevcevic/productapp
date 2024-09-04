import Menu from "../../containers/Menu";
import Wrapper from "../../components/Wrapper";
import Header from "../../containers/Header";
import { LargeText, MediumText } from "../../components/Typography";
import "./faq.style.scss";

const Faq = function () {
  return (
    <div className="shop-faq">
      <Menu />
      <Header />
      <Wrapper>
        <LargeText>Frequently asked questions</LargeText>
        <div className="shop-faq-content">
          <div className="shop-faq-question">
            <MediumText>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </MediumText>
          </div>

          <MediumText>
            &nbsp;&nbsp;&nbsp; Curabitur luctus, libero id sollicitudin egestas,
            nisi purus ullamcorper dui, eget fermentum dolor dui vitae sem.
            Mauris iaculis nibh eget varius mattis. Aliquam sit amet nisl vitae
            mauris venenatis feugiat ut nec dui. Pellentesque sit amet nisl non
            ligula tempor sodales. Phasellus in sapien a tortor interdum
            ultricies. Suspendisse quis est fermentum, scelerisque magna semper,
            egestas arcu. Pellentesque pulvinar interdum dui ac porta.
          </MediumText>
          <div className="shop-faq-question">
            <MediumText>
              2. Duis porttitor ultricies urna, ac ullamcorper est dapibus ac?
            </MediumText>
          </div>
          <MediumText>
            &nbsp;&nbsp;&nbsp; Quisque ut dui at dolor congue condimentum a quis
            dolor. Maecenas egestas dui vitae enim congue, tincidunt ultrices mi
            accumsan. Nullam quam nunc, vehicula sed viverra ultrices, interdum
            eget dui. Morbi vitae urna pretium, lobortis purus non, placerat
            nulla. Nulla venenatis aliquam ante at varius. Vestibulum quis
            fermentum libero. Nunc velit leo, cursus vel gravida a, tincidunt in
            massa. Vestibulum faucibus accumsan fringilla. Ut sit amet feugiat
            odio. Donec auctor mauris accumsan, interdum neque eu, ultricies
            enim. Nulla hendrerit justo felis, et placerat est dapibus at.
            Aliquam tortor nunc, tempus ac velit ac, vestibulum porttitor
            mauris. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nulla ullamcorper vestibulum
            facilisis. Nam elementum tellus velit, vel tincidunt ante aliquam
            eget. Morbi tincidunt libero nisi, non blandit enim imperdiet ut.
            Nulla posuere quam ut felis tristique, sit amet malesuada ligula
            tincidunt. Aenean varius enim sed arcu sagittis, sit amet volutpat
            turpis egestas. Maecenas lacus ex, accumsan a enim et, commodo
            finibus mauris. Ut neque enim, dapibus blandit urna sit amet,
            maximus porta nulla. Morbi sit amet dui consectetur, sodales orci
            ut, ultricies erat. Nam interdum lacinia justo.
          </MediumText>
          <div className="shop-faq-question">
            <MediumText>
              3. Curabitur a efficitur lorem, nec interdum velit?
            </MediumText>
          </div>
          <MediumText>
            &nbsp;&nbsp;&nbsp; Nulla facilisi. Morbi in semper justo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis congue
            ipsum, vitae porta odio. Donec id cursus quam. Vestibulum in urna et
            ex tempus consectetur. Sed ac enim maximus ex cursus interdum sed at
            leo. Maecenas eu augue elit. Mauris auctor lacinia arcu, nec
            lobortis justo ultrices nec. Sed pellentesque porttitor nunc vitae
            feugiat. Nunc sed volutpat elit. Vivamus tincidunt placerat felis,
            id aliquet nunc interdum mollis. Aliquam commodo, turpis a varius
            consectetur, nulla erat mattis ligula, eu vulputate mauris mauris
            eget lorem. Etiam at nisl in sapien posuere lobortis eu eu sem.
            Integer turpis nunc, pellentesque et maximus quis, cursus id lorem.
            Vestibulum blandit, nulla rhoncus lobortis molestie, eros magna
            venenatis nisl, ac laoreet metus nunc vitae dui.
          </MediumText>
          <div className="shop-faq-question">
            <MediumText>4. Sed imperdiet vitae orci eget volutpat ?</MediumText>
          </div>

          <MediumText>
            &nbsp;&nbsp;&nbsp; Quisque gravida ornare turpis id cursus. Etiam
            ornare a justo vitae posuere. Cras sollicitudin ipsum a nibh mattis
            interdum. Pellentesque elementum, ex ut lobortis euismod, sem ex
            bibendum lacus, in varius purus turpis dignissim metus. Nam
            bibendum, lorem eget rutrum sollicitudin, purus mauris viverra
            risus, in hendrerit ante diam ac purus. Aliquam suscipit in ipsum
            sit amet pretium. Nunc malesuada ante lorem, vitae tincidunt lectus
            aliquet a. Praesent malesuada ligula in iaculis tincidunt. Quisque
            sapien metus, fringilla eu vestibulum id, tempus vitae metus. Nulla
            aliquet pellentesque libero nec lobortis. Cras lacus odio,
            pellentesque eget mauris ut, euismod cursus magna.
          </MediumText>
        </div>
      </Wrapper>
    </div>
  );
};
export default Faq;
