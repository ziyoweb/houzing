import React, { useEffect, useState } from "react";
import {
  Container,
  User,
  Wrapper,
  MenuWrapper,
  Section,
  SelectAntd,
} from "./style";
import { useLocation } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
// import { uzeReplace } from "../../hooks/uzeReplace";
import { useSearch } from "../../hooks/useSearch";
import { Button, Input } from "../Generic";
import { useFormik } from "formik";

export const MyProfile = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Category");
  // const { search } = useLocation();
  // const navigate = useNavigate();
  // const request = useRequest();
  const location = useLocation();
  const query = useSearch();

  // const onChange = ({ target: { name, value } }) => {
  //   navigate(`${location.pathname}${uzeReplace(name, value)}`);
  // };
  const { REACT_APP_BASE_URL: url } = process.env;

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
  }, [location?.search, data]);

  const formik = useFormik({
    initialValues: {
      country: "",
      region: "",
      city: "",
      address: "",
      room: "",
      area: "",
      bath: "",
      beds: "",
      garage: "",
      yearbuilt: "",
      price: "",
      sale_price: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "start" }} className="title">
          Add new house
        </div>
      </User>

      <Container>
        <MenuWrapper>
          <h2 className="subTitle">Address</h2>
          <form onSubmit={formik.handleSubmit}>
            <Section>
              <Input
                name="country"
                type="text"
                id="country"
                placeholder="Country"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
              <Input
                value={formik.values.region}
                onChange={formik.handleChange}
                name="region"
                type="text"
                placeholder="Region"
              />
              <Input
                value={formik.values.city}
                onChange={formik.handleChange}
                name="city"
                type="text"
                placeholder="City"
              />
              <Input
                value={formik.values.address}
                onChange={formik.handleChange}
                name="address"
                type="text"
                placeholder="Address"
              />
            </Section>
            <h2 className="subTitle">Apartment info</h2>
            <Section>
              <Input
                value={formik.values.room}
                onChange={formik.handleChange}
                name="room"
                type="number"
                placeholder="Rooms"
              />
              <Input
                value={formik.values.area}
                onChange={formik.handleChange}
                name="area"
                type="number"
                placeholder="Area"
              />
              <Input
                value={formik.values.bath}
                onChange={formik.handleChange}
                name="bath"
                type="number"
                placeholder="Bath"
              />
              <Input
                value={formik.values.beds}
                onChange={formik.handleChange}
                name="beds"
                type="number"
                placeholder="Beds"
              />
              <Input
                value={formik.values.garage}
                onChange={formik.handleChange}
                name="garage"
                type="number"
                placeholder="Garage"
              />
              <Input
                value={formik.values.yearbuilt}
                onChange={formik.handleChange}
                name="yearbuilt"
                type="number"
                placeholder="YearBuilt"
              />

              <SelectAntd
                defaultValue={value}
                options={[
                  { value: "", label: "All Category" },
                  ...data.map((value) => {
                    return { value: value?.id, label: value?.name || "Empty" };
                  }),
                ]}
              />
            </Section>
            <h2 className="subTitle">Price</h2>
            <Section>
              <Input
                value={formik.values.price}
                onChange={formik.handleChange}
                name="price"
                type="number"
                placeholder="Price"
              />
              <Input
                value={formik.values.sale_price}
                onChange={formik.handleChange}
                name="sale_price"
                type="number"
                placeholder="Sale price"
              />
            </Section>

            <Button>Save</Button>
          </form>
        </MenuWrapper>
      </Container>
    </Wrapper>
  );
};

export default MyProfile;
