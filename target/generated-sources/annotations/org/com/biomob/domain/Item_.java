package org.com.biomob.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import org.com.biomob.domain.enumeration.CategoriaItem;
import org.com.biomob.domain.enumeration.UnidadeMedida;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Item.class)
public abstract class Item_ {

	public static volatile SingularAttribute<Item, String> imagemContentType;
	public static volatile SingularAttribute<Item, byte[]> imagem;
	public static volatile SingularAttribute<Item, UnidadeMedida> unidadeMedida;
	public static volatile SingularAttribute<Item, Long> id;
	public static volatile SingularAttribute<Item, CategoriaItem> categoriaItem;
	public static volatile SingularAttribute<Item, Integer> quantidade;
	public static volatile SingularAttribute<Item, String> descricao;

	public static final String IMAGEM_CONTENT_TYPE = "imagemContentType";
	public static final String IMAGEM = "imagem";
	public static final String UNIDADE_MEDIDA = "unidadeMedida";
	public static final String ID = "id";
	public static final String CATEGORIA_ITEM = "categoriaItem";
	public static final String QUANTIDADE = "quantidade";
	public static final String DESCRICAO = "descricao";

}

