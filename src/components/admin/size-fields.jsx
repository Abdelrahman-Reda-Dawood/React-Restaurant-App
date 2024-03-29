import { DollarSign } from "lucide-react";

const SizeFields = ({
  sizes,
  price_basic,
  setPrice_basic,
  price_md,
  setPrice_md,
  price_lg,
  setPrice_lg,
}) => {
  const handlePriceChange = (e, size) => {
    const value = e.target.value;
    if (size === "basic") {
      setPrice_basic(value);
    } else if (size === "md") {
      setPrice_md(value);
    } else if (size === "lg") {
      setPrice_lg(value);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        {/* Basic size */}
        <div className="relative flex gap-2">
          <input
            required
            name="price_basic"
            type="number"
            min={1}
            step={0.01}
            value={price_basic}
            placeholder="Price for basic..."
            onChange={(e) => handlePriceChange(e, "basic")}
            className="text-base border w-full h-12 border-red-300 focus:border-white pl-3 bg-black bg-opacity-70 rounded-lg"
          />
          <DollarSign className="absolute right-4 bottom-3 text-gray-300" />
        </div>
      </div>
      {/* Mid size */}
      {sizes === "2" && (
        <div>
          <div className="relative flex gap-2">
            <input
              required
              name="price_md"
              type="number"
              min={1}
              step={0.01}
              value={price_md}
              placeholder="Price for md..."
              onChange={(e) => handlePriceChange(e, "md")}
              className="text-base border w-full h-12 border-red-300 focus:border-white pl-3 bg-black bg-opacity-70 rounded-lg"
            />
            <DollarSign className="absolute right-4 bottom-3 text-gray-300" />
          </div>
        </div>
      )}
      {/* Lg size */}
      {sizes === "3" && (
        <div>
          <div className="relative flex gap-2">
            <input
              required
              name="price_md"
              type="number"
              min={1}
              step={0.01}
              value={price_md}
              placeholder="Price for md..."
              onChange={(e) => handlePriceChange(e, "md")}
              className="text-base border w-full h-12 border-red-300 focus:border-white pl-3 bg-black bg-opacity-70 rounded-lg"
            />
            <span className="absolute right-4 bottom-3 text-gray-300">$</span>
          </div>
        </div>
      )}
      {sizes === "3" && (
        <div>
          <div className="relative flex gap-2">
            <input
              required
              name="price_lg"
              type="number"
              min={1}
              step={0.01}
              value={price_lg}
              placeholder="Price for lg..."
              onChange={(e) => handlePriceChange(e, "lg")}
              className="text-base border w-full h-12 border-red-300 focus:border-white pl-3 bg-black bg-opacity-70 rounded-lg"
            />
            <DollarSign className="absolute right-4 bottom-3 text-gray-300" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeFields;
