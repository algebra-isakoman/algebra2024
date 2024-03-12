import { AddressType } from "../types/global";

type Props = {
  addresses: AddressType[];
};
const Addresses = ({ addresses }: Props) => {
  return (
    <>
      {addresses.map((address) => {
        return (
          <>
            <div className="address">
              <div className="address__name">
                {address.street},&nbsp;{address.postCode}&nbsp;{address.city}
              </div>
              <div>{address.country}</div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Addresses;
