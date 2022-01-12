type PropertyInfoType = {
  account_id: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
};
type CheckedListType = { [key: string]: boolean };
type RelatedAddressType = { [key: string]: string[] };

export default function App() {
  function find_related_addresses(addresses: PropertyInfoType[]) {
    //list of addresses already checked
    const alreadyCheckedList: CheckedListType = {};

    //final grouped list of addresses
    var relatedAddressList: RelatedAddressType = {};

    //we go through each address to see if we've already checked it
    for (var i = 0; i < addresses.length; i++) {
      const fullAddress = `${addresses[i].street_address}, ${addresses[i].city}, ${addresses[i].state} ${addresses[i].postal_code}`;
      //if we haven't checked it add it to the list of addresses already checked
      if (!alreadyCheckedList[fullAddress]) {
        alreadyCheckedList[fullAddress] = true;

        // we create a temporary object for the current address we are checking
        const singleAddressObject = {
          [fullAddress]: [addresses[i].account_id],
        };

        //we now traverse the rest of the list downward to see if there are any other addresses that match
        for (var c = i + 1; c < addresses.length; c++) {
          if (addresses[i].street_address === addresses[c].street_address) {
            //we copy the current list of account ids for the given address
            //and push the new account id to the list
            const tempAddressList = singleAddressObject[fullAddress];
            tempAddressList.push(addresses[c].account_id);

            singleAddressObject[fullAddress] = tempAddressList;
          }
        }

        //after searching the list for other addresses that match, we add the temporary object to the list of related addresses
        relatedAddressList = { ...relatedAddressList, ...singleAddressObject };
      }
    }

    //filter object to only include addresses with more than one account id
    const filteredRelatedAddressList = Object.keys(relatedAddressList).reduce(
      (acc: RelatedAddressType, key) => {
        if (relatedAddressList[key].length > 1) {
          acc[key] = relatedAddressList[key];
        }
        return acc;
      },
      {}
    );
    return JSON.stringify(filteredRelatedAddressList);
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log(USERInfo);
        }}
      >
        Click Me
      </button>
      <button
        onClick={() => {
          console.log(find_related_addresses(USERInfo));
        }}
      >
        organize
      </button>
    </div>
  );
}

const USERInfo: PropertyInfo[] = [
  {
    account_id: "39",
    street_address: "216 N May St",
    city: "Chicago",
    state: "IL",
    postal_code: "60607",
  },
  {
    account_id: "40",
    street_address: "625 W Adams St",
    city: "Chicago",
    state: "IL",
    postal_code: "60661",
  },
  {
    account_id: "41",
    street_address: "151 N Franklin St",
    city: "Chicago",
    state: "IL",
    postal_code: "60606",
  },
  {
    account_id: "42",
    street_address: "216 N May St",
    city: "Chicago",
    state: "IL",
    postal_code: "60607",
  },
  {
    account_id: "43",
    street_address: "151 N Franklin St",
    city: "Chicago",
    state: "IL",
    postal_code: "60606",
  },
  {
    account_id: "44",
    street_address: "216 N May St",
    city: "Chicago",
    state: "IL",
    postal_code: "60607",
  },
];
