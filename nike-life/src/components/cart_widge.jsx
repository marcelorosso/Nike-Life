import '../styles.css';
import IconButton from "@mui/material/IconButton"
import StyledBadge from "@mui/material/Badge"

const CartWidget = () => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={12} color="primary">
      <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/undefined/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry-1.png" alt="cartImg"/>
      </StyledBadge>
    </IconButton>
  )
}

export default CartWidget;
