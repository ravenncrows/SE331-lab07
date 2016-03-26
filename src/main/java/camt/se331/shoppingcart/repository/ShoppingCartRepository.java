package camt.se331.shoppingcart.repository;

import camt.se331.shoppingcart.entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by waiti on 3/26/2016.
 */
@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart,Long> {
}
