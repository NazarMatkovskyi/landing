import React from 'react'
import './style.scss'
import { BlockLine } from '../index'
import { Rectangle } from '../../assets/files'

const Info = () => {
  return (
    <div className="info">
      <div className="info_inner"
           style={{ backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/c008/87bd/ce2ffb3aa2f16715dd3884374ee0b386?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpCEF4zI5CufswZEF7ttLFKTjzInLCnC2JG56B-o0DrB7eeoOe9q03I5YvhDErEBoLu5DWN6P8lgVqT~N6NYhyTtFPvE5vO8U2BA0TpNZ2P0vxC6qybMm5vGAMbn7W6kjPJra04TFk~zxOtLTWEfe6ufEySKpBbKUeSwJtg4CVrk7p~qqc7I8yVF07dHtZufH1cB2Y2f6VB4L9UDH4~8Wm56xlmB~KgsA3Qv2JjJX43xoF5EL-UP2BD08BOjW2bm9If86NNMK7H5cw5E-jG5T8i5LA5fVZaEXG1dYgUSj9klnv7CJAcfxAXpB1vynghKpP-MDquILJv1zSWnccpb4w__")' }}>
        <div className={'info_inner_left'}>
          <h3>Why Serious Business?</h3>
          <p>Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi
            commodo
            maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna
            pellentesque, aliquet velit in.</p>
          <Rectangle/>

        </div>
        <div className={'info_inner_right'}>
          <p>Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi
            commodo
            maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna
            pellentesque, aliquet velit in, auctor massa. Nunc non fringilla justo. Etiam consequat auctor est ac
            dignissim. Integer accumsan aliquam vestibulum. Vestibulum ornare, metus eget scelerisque pulvinar, lectus
            tellus vestibulum est, et suscipit velit nunc quis turpis. Integer lacus libero, consectetur id pharetra
            sit
            amet, maximus eu tellus. Suspendisse potenti. In eget nibh iaculis, sagittis ante et, fringilla augue.
            Vestibulum dolor ligula, gravida at ante ac, sagittis viverra nibh. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis sagittis viverra nibh egestas.</p>
        </div>
      </div>
      <div className="info_line">
        <BlockLine
          position={2}
          title={'B&O Plan —'}
          subtitle={'User Experience, User Interface'}
        />
      </div>
    </div>
  )
}

export default Info
