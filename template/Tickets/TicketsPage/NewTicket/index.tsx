import { useEffect, useState } from "react";
import Field from "@/components/Field";
import Select from "@/components/Select";
import { SelectOption } from "@/types/select";
import Button from "@/components/Button/page";
import { Ticket } from "@/lib/tickets";

type Props = {
  onSubmit: (payload: Omit<Ticket, "id" | "createdAt">) => Promise<void> | void;
  initial?: Ticket | null;
  isEdit?: boolean;
};

const ticketNames: SelectOption[] = [
  { id: 0, name: "VIP" },
  { id: 1, name: "General" },
  { id: 2, name: "Early Bird" },
];

const salesStatuses: SelectOption[] = [
  { id: 0, name: "Active" },
  { id: 1, name: "Sold Out" },
];

const visibilityes: SelectOption[] = [
  { id: 0, name: "Public" },
  { id: 1, name: "Hidden" },
];

const NewTicket = ({ onSubmit, initial = null, isEdit = false }: Props) => {
  const [name, setName] = useState<SelectOption>(ticketNames[0]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sold, setSold] = useState("");
  const [salesStatus, setSalesStatus] = useState<SelectOption>(
    salesStatuses[0]
  );
  const [visibility, setVisibility] = useState<SelectOption>(visibilityes[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initial) {
      setName({ id: 0, name: initial.ticketName });
      setPrice(initial.price);
      setQuantity(initial.quantity);
      setSold(initial.sold);
      setSalesStatus({ id: 0, name: initial.salesStatus });
      setVisibility({ id: 0, name: initial.visibility });
    }
  }, [initial]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name?.name) e.name = "Ticket name is required";
    if (!price || Number.isNaN(Number(price)))
      e.price = "Valid price is required";
    if (!quantity || Number.isNaN(Number(quantity)))
      e.quantity = "Valid quantity is required";
    if (!sold || Number.isNaN(Number(sold)))
      e.sold = "Valid sold amount is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateField = (field: string, value: any) => {
    const e = { ...errors };
    if (field === "name") {
      if (!value?.name) e.name = "Ticket name is required";
      else delete e.name;
    }
    if (field === "price") {
      if (!value || Number.isNaN(Number(value)))
        e.price = "Valid price is required";
      else delete e.price;
    }
    if (field === "quantity") {
      if (!value || Number.isNaN(Number(value)))
        e.quantity = "Valid quantity is required";
      else delete e.quantity;
    }
    if (field === "sold") {
      if (!value || Number.isNaN(Number(value)))
        e.sold = "Valid sold amount is required";
      else delete e.sold;
    }
    setErrors(e);
  };

  const submit = async () => {
    if (!validate()) return;
    const payload = {
      ticketName: name.name,
      price: price,
      quantity: quantity,
      sold: sold,
      salesStatus: salesStatus.name,
      visibility: visibility.name,
    } as Omit<Ticket, "id" | "createdAt">;
    await onSubmit(payload);
  };

  return (
    <div className="flex flex-col gap-4">
      <Select
        label="Ticket Name"
        value={name}
        onChange={(v) => {
          setName(v);
          validateField("name", v);
        }}
        options={ticketNames}
        required
      />
      {errors.name && <div className="text-error text-sm">{errors.name}</div>}

      <Field
        label="Price"
        placeholder="Enter price"
        type="tel"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
          validateField("price", e.target.value);
        }}
        required
      />
      {errors.price && <div className="text-error text-sm">{errors.price}</div>}

      <Field
        label="Quantity"
        placeholder="Enter quantity"
        type="tel"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
          validateField("quantity", e.target.value);
        }}
        required
      />
      {errors.quantity && (
        <div className="text-error text-sm">{errors.quantity}</div>
      )}

      <Field
        label="Sold"
        placeholder="Number sold"
        type="tel"
        value={sold}
        onChange={(e) => {
          setSold(e.target.value);
          validateField("sold", e.target.value);
        }}
        required
      />
      {errors.sold && <div className="text-error text-sm">{errors.sold}</div>}

      <Select
        label="Sales Status"
        value={salesStatus}
        onChange={setSalesStatus}
        options={salesStatuses}
        required
      />

      <Select
        label="Visibility"
        value={visibility}
        onChange={setVisibility}
        options={visibilityes}
        required
      />

      <div className="pt-4">
        <Button isPrimary isMedium onClick={submit}>
          {isEdit ? "Save" : "Create"}
        </Button>
      </div>
    </div>
  );
};

export default NewTicket;
