import { createContext, useContext, ReactNode, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
	children: ReactNode;
};

type CartItem = {
	id: number;
	quantity: number;
};

type ShoppingCartCtx = {
	cartQuantity: number;
	cartItems: CartItem[];
	openCart: () => void;
	closeCart: () => void;
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartCtx);

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
	const [isOpen, setIsOpen] = useState(false);

	const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);

	function getItemQuantity(id: number) {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}

	function increaseCartQuantity(id: number) {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id)) {
				return currentItems.map((item) => {
					if (item.id === id) return { ...item, quantity: item.quantity + 1 };
					else return item;
				});
			} else return [...currentItems, { id, quantity: 1 }];
		});
	}

	function decreaseCartQuantity(id: number) {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity === 1) return currentItems.filter((item) => item.id !== id);
			else
				return currentItems.map((item) => {
					if (item.id === id) return { ...item, quantity: item.quantity - 1 };
					else return item;
				});
		});
	}

	function removeFromCart(id: number) {
		setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
	}

	return (
		<ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart }}>
			{children}
			<ShoppingCart isOpen={isOpen} />
		</ShoppingCartContext.Provider>
	);
}
