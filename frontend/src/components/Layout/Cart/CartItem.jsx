import React from "react";
import { Button } from "baseui/button";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQty } from "../../../store/actions";
import { Row, Col, Container } from "react-grid-system";
import { LabelMedium, H6 } from "baseui/typography";
import { useStyletron } from "baseui";
import { Input } from "baseui/input";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [css, theme] = useStyletron();

  const onSubmit = (e) => {
    const quantity = parseInt(e.target.value);
    dispatch(updateQty({ ...item, quantity }));
  };
  return (
    <Container>
      <Row justify="start" align="center">
        <Col sm={12} xs={12} md={6} lg={6}>
          <img
            className={css({
              width: "100%",
              height: "10rem",
              objectFit: "contain",
            })}
            src={item.image_url[0]}
            alt=""
          />
        </Col>
        <Col sm={12} xs={12} md={6} lg={6} style={{ padding: "1rem" }}>
          <H6 margin="0">{item.shoe_name}</H6>
          <LabelMedium color={theme.colors.primary600}>
            <Input
              type="number"
              value={item.quantity}
              autoFocus={false}
              min={1}
              onChange={(e) => onSubmit(e)}
              placeholder="Quantity"
            />
            {/* Qty: {item.quantity} */}
          </LabelMedium>
          <LabelMedium color={theme.colors.primary600}>
            Price:
            <span
              className={css({
                color: theme.colors.negative600,
              })}
            >
              {item.price * item.quantity}
            </span>
          </LabelMedium>
          <div
            className={css({
              display: "flex",
              justifyContent: "flex-end",
            })}
          >
            <Button
              kind="minimal"
              onClick={() => dispatch(removeFromCart(item.shoe_id))}
            >
              Remove
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
