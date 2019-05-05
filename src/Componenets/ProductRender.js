import React, { Component } from "react";
import products from "./productData";
import ProductTable from "./ProductTable";
import { connect } from "react-redux";

class ProductRender extends Component {
  render() {
    const proteinTable = this.props.products[0].proteins.map(item => (
      <ProductTable
        key={item.id}
        item={item}
        macro={this.props.userInfo.proteins}
        meals={this.props.userInfo.meals}
      />
    ));
    const carbsTable = this.props.products[0].carbs.map(item => (
      <ProductTable
        key={item.id}
        item={item}
        macro={this.props.userInfo.carbs}
        meals={this.props.userInfo.meals}
      />
    ));
    const fatTable = this.props.products[0].fat.map(item => (
      <ProductTable
        key={item.id}
        item={item}
        macro={this.props.userInfo.fat}
        meals={this.props.userInfo.meals}
      />
    ));
    return (
      <div className="d-flex flex-md-row flex-column  text-center">
        <table className="table table-striped table-bordered table-hover table-sm">
          <thead className="thead-dark">
            <tr>
              <th colSpan="2">Proteins</th>
            </tr>
            <tr>
              <th>Product</th>
              <th>Grams per meal</th>
            </tr>
          </thead>
          {proteinTable}
        </table>
        <table className="table table-striped table-bordered table-hover table-sm">
          <thead className="thead-dark">
            <tr>
              <th colSpan="2">Carbs</th>
            </tr>
            <tr>
              <th>Product</th>
              <th>Grams per meal</th>
            </tr>
          </thead>
          {carbsTable}
        </table>
        <table className="table table-striped table-bordered table-hover table-sm">
          <thead className="thead-dark">
            <tr>
              <th colSpan="2">Fat</th>
            </tr>
            <tr>
              <th>Product</th>
              <th>Grams per meal</th>
            </tr>
          </thead>
          {fatTable}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  products: products
});

export default connect(mapStateToProps)(ProductRender);
