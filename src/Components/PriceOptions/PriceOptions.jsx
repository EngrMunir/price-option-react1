import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

       const priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio equipment",
              "Access to weightlifting area",
              "Access to locker rooms and showers",
              "Fitness assessment upon signup",
              "Discounts on gym merchandise"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to all gym facilities",
              "Unlimited group fitness classes",
              "Personal training session once a month",
              "Towel service",
              "Sauna and steam room access",
              "Nutritional consultation"
            ]
          },
          {
            "id": 3,
            "name": "Family Membership",
            "price": 79.99,
            "features": [
              "Access for two adults and two children",
              "Access to all gym facilities",
              "Discounts on additional services",
              "Childcare services",
              "Family fitness classes",
              "Complimentary smoothie bar"
            ]
          }
        ]
      
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;