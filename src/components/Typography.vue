<template>
  <div class="ui-typography">
    <div class="row">
      <div class="col-md-12">

        <card header-text="Typography">
          <div class="typo-headers">
            <h1 class="pb-2 display-4">Very Important Information H1</h1>
            <h2 class="pb-2 display-5">Sections & Modal Names H2</h2>
            <h3 class="pb-2 display-5">Articles & Block Headings H3</h3>
            <h4 class="pb-2 display-5">Random Tiny Heading H4</h4>
            <h5 class="pb-2 display-5">Random Tiny Heading H5</h5>
            <h6 class="pb-4 display-5">Random Tiny Heading H6</h6>
          </div>
          <div class="typo-articles">
            <p>
              The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, <span
              class="bg-flat-color-1 text-light">woodlands</span>, thorny scrublands, <span
              class="clickable-text">mountains</span>
              , and coastal hills. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain <mark>highlighted text</mark> zebra are endangered.</p>
            <blockquote class="blockquote mt-3 text-right">
              <p>
                Blockquotes. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins. </p>
              <footer class="blockquote-footer">Jefferey Lebowski</footer>
            </blockquote>
            <p>
              lthough zebra species may have overlapping ranges, they do not interbreed. In captivity, plains zebras have been crossed with mountain zebras. The hybrid foals <span
              class="bg-flat-color-1 text-light">selected text</span> lacked a dewlap and resembled their
            </p>
          </div>
          <div class="vue-lists">
            <h2 class="mb-4">Lists</h2>
            <div class="row">
              <div class="col-md-6">
                <h3>Unordered</h3>
                <ul >
                  <li>
                    A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.
                  </li>
                  <li>The more traditional of these (1 and 2, below) relate to camouflage.</li>
                  <li>The vertical striping may help the zebra hide in the grass by disrupting its outline.</li>
                  <li>
                    In addition, even at moderate distances, the striking striping merges to an apparent grey.
                    <ul class="vue-list-inner">
                      <li>However, the camouflage has been contested with arguments that most of a zebra's predator.</li>
                      <li>Such as lions and hyenas cannot see well at a distance.</li>
                      <li>More likely to have smelled or heard a zebra.</li>
                    </ul>
                  </li>
                  <li>Before seeing it from a distance, especially at night.</li>
                </ul>
              </div>
              <div class="col-md-6 text-left">
                <div>
                  <h3>Ordered</h3>
                  <ol class="vue-ordered">
                    <li>
                      A wide variety of hypotheses have been proposed to account for the evolution of the striking stripes of zebras.
                    </li>
                    <li>The more traditional of these (1 and 2, below) relate to camouflage.</li>
                    <li>The vertical striping may help the zebra hide in the grass by disrupting its outline.</li>
                    <li>
                      In addition, even at moderate distances, the striking striping merges to an apparent grey.
                      <ul class="vue-list-inner">
                        <li>However, the camouflage has been contested with arguments that most of a zebra's predator.
                        </li>
                        <li>Such as lions and hyenas cannot see well at a distance.</li>
                        <li>More likely to have smelled or heard a zebra.</li>
                      </ul>
                    </li>
                    <li>Before seeing it from a distance, especially at night.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="vue-misc">
            <h2 class="display-5 my-3">Misc</h2>
            <div class="row">
              <div class="col-md-6">
                <h3>Address</h3>
                <address class="mt-3">
                  <strong>SJØNNA</strong><br>
                  Nezalezhnasti Ave, 13 - 28A<br>
                  Minsk, Belarus, 220141<br>
                  +375 29 319-53-98<br>
                  <br>
                  <b>Vasili Savitski</b><br>
                  <a href="mailto">hello@examplemail.com</a>

                </address>
              </div>
              <div class="col-md-6">
                <h3 class="mb-3">Well</h3>
                <div class="jumbotron">
                  Zebras have excellent eyesight. It is believed that they can see in color. Like most ungulates, the zebra's eyes are on the sides of its head, giving it a wide field of view.
                </div>
              </div>
            </div>
          </div>

        </card>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'typography'
  }
</script>

<style lang="scss">
  .ui-typography {
    .typo-articles {
      margin-bottom: 6.25rem;
      width: 90%;
    }
    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6{
      font-weight: 700;
    }
    mark{
      background-color:#dbf9e7;
    }
    .clickable-text{
      cursor: pointer;
    }
    .widget-body {
      padding: 3.75rem 4.7rem 0 2.2rem !important;
    }

    .col-md-6 {
      padding-right: 0;
    }

    .vue-lists ul, ol {
      width: 85%;
    }
  }

</style>
