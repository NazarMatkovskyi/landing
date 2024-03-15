import React from 'react'
import './style.scss'
import { BlockLine } from '../index'
import { Line } from '../../assets/files'

const Header = () => {
  return (
    <div className="header ">
      <div className="header_inner "
           style={{ backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/3a29/5f8b/a625e8a9c1a1b3d535dcc07cff28a1d1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K2Ehj~Bzn~qvHwU0nPo3KtvO9JnwU-X19ErLUSbBrQFzRWmOQavdkwx1W3GQia5oOjYCwZBLQps4h-YQyHkNbz7D2uxWFYGQDRK36eaMb8kCc8yXD81YwT4CClHWYCciYpd9xw48vhf7bAje~6JvjsTL4eTnyuECOuDr-wbKRWBbkrksgdp2aplUYiIhQFBawcLZvCLR3o3b06FVjR60TGLvnzpQWlq26eilZ7Hqhto7RmJNMSuXDgLdXb-~M2qM2XtnrDYPt7TiTtW2gylU8cDy6uk7dHleKJ-ghUfpuGAx4JaxhT41omqMPJIgGE7DXVFhH9vQ3jRGBOS-GB~WtQ__")' }}>
        <h3 className="header_inner_title">Lorem ipsum dolor sit amet, consectetur adioiscing elit.</h3>
        <p className="header_inner_subtitle">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur...</p>
        <Line/>
      </div>
      <div className="header_line">
        <BlockLine position={1}
                   title={'Reykjavik Fashion Festival —'}
                   subtitle={'Branding, Interactive'}
        />

      </div>
    </div>

  )
}

export default Header
