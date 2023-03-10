import React from "react";
import { Row, Col } from "react-grid-system";
import { useForm, Controller } from "react-hook-form";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import { Label2 } from "baseui/typography";
import { useSelector, useDispatch } from "react-redux";
import { updateShipping } from "../../../../store/actions";

const Shipping = ({ onComplete }) => {
  const { control, handleSubmit, errors } = useForm();
  const { form: shippingState } = useSelector((state) => state.shipping);
  const dispatch = useDispatch();
  const [css, theme] = useStyletron();
  const onSubmit = (data) => {
    dispatch(updateShipping(data));
    onComplete(data);
  };
  const spacing = css({ margin: "2rem 0" });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row className={spacing}>
        <Col>
          <Controller
            as={Input}
            control={control}
            name="firstName"
            error={errors.firstName}
            defaultValue={shippingState?.firstName}
            rules={{ required: true }}
            placeholder={"First Name"}
          />
          <Label2 color={theme.colors.negative} marginTop="0.5rem">
            {errors.firstName && "First name is required"}
          </Label2>
        </Col>
        <Col>
          <Controller
            as={Input}
            control={control}
            rules={{ required: true }}
            error={errors.lastName}
            name="lastName"
            defaultValue={shippingState?.lastName}
            placeholder={"Last Name"}
          />
          <Label2 color={theme.colors.negative} marginTop="0.5rem">
            {errors.lastName && "Last name is required"}
          </Label2>
        </Col>
      </Row>
      <Row className={spacing}>
        <Col>
          <Controller
            as={Input}
            control={control}
            name="address"
            defaultValue={shippingState?.address}
            error={errors.address}
            rules={{ required: true }}
            placeholder={"Address"}
          />
          <Label2 color={theme.colors.negative} marginTop="0.5rem">
            {errors.address && "Address is required"}
          </Label2>
        </Col>
      </Row>
      <Row className={spacing}>
        <Col xs={12} sm={6}>
          <Controller
            as={Input}
            control={control}
            name="email"
            defaultValue={shippingState?.email}
            error={errors.email}
            rules={{
              required: true,
              pattern:
                /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
            }}
            placeholder={"Email"}
          />
          <Label2 color={theme.colors.negative} marginTop="0.5rem">
            {errors.email && "Email name is required and should be valid"}
          </Label2>
        </Col>
        <Col xs={12} sm={6}>
          <Controller
            as={Input}
            control={control}
            name="phoneNumber"
            defaultValue={shippingState?.phoneNumber}
            error={errors.phoneNumber}
            rules={{ required: true }}
            placeholder={"Phone Number"}
          />
          <Label2 color={theme.colors.negative} marginTop="0.5rem">
            {errors.phoneNumber && "Phone Number is required"}
          </Label2>
        </Col>
      </Row>
      <Row justify="end">
        <Col
          className={css({
            display: "flex",
            justifyContent: "flex-end",
          })}
        >
          <Button type="submit">Save And Submit</Button>
        </Col>
      </Row>
    </form>
  );
};

export default Shipping;
