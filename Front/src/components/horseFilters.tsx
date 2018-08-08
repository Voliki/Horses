import * as React from 'react';
import { Range, Handle } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { v4 as uuidV4 } from 'uuid';

import 'rc-slider/assets/index.css';

const test = [
  {
    className: 'row2-type',
    label: 'Type',
  },
  {
    className: 'row2-skulder',
    label: 'Skulder',
  },
  {
    className: 'row2-forlemmer',
    label: 'Forlemmer',
  },
  {
    className: 'row2-skridt',
    label: 'Skridt',
  },
  {
    className: 'row2-galop',
    label: 'Galop',
  },
  {
    className: 'row3-hoved',
    label: 'Hoved',
  },
  {
    className: 'row3-overlinie',
    label: 'Overlinie',
  },
  {
    className: 'row3-baglemmer',
    label: 'Baglemmer',
  },
  {
    className: 'row3-trav',
    label: 'Trav',
  },
  {
    className: 'row3-breeding',
    label: 'Breeding',
  }
]

export default class HorseFilters extends React.Component<any, any> {

  applyFilters = () => {
    console.log(this.props.filters);
  }

  changeFiltersSlider = (field: string, value: Array<number>) => {
    this.props.changeFiltersAction(field, value);
  }

  changeFilters = (e: any) => {
    this.props.changeFiltersAction(e.target.id, e.target.value);
  }

  handle = (props: any) => {
    const { value, dragging, index, ...restProps } = props;  
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  }

  renderSlider = () => {
    const element: Array<any> = test.map((item: any, index: number) => {
      const min: number = this.props.filters[item.label.toLowerCase()][0];
      const max: number = this.props.filters[item.label.toLowerCase()][1];
      const key = `${index}_slider`;
      return (
        <div key={key} className={`${item.className} cell-padding-10px`}>
          <div className='filter-range-container'>
            <div className='filter-label'>
              {item.label}
            </div>
            <div className='filter-range'>
              <Range
                min={0}
                max={10}
                allowCross={false}
                defaultValue={[0, 10]}
                handle={this.handle}
                onChange={(e: Array<number>) => {
                  this.changeFiltersSlider(item.label.toLowerCase(), e);
                }}
              />
            </div>
            <div className='filter-range-value'>
              {`${min}-${max}`}
            </div>
          </div>
        </div>
      )
    });

    return element;
  }

  render() {
    return (
      <div className='filter-container'>
        <div className='row1-name cell-padding-10px'>
          <input
            id='name'
            className='form-control'
            placeholder='Name'
            onChange={this.changeFilters}
          />
        </div>
        <div className='row1-sex cell-padding-10px'>
          <select
            id='sex'
            className='form-control'
            value={'sex'}
            onChange={this.changeFilters}
          >
            <option value="sex" disabled>Sex</option>
          </select>
        </div>
        <div className='row1-color cell-padding-10px'>
          <select
            id='color'
            className='form-control'
            value={'color'}
            onChange={this.changeFilters}
          >
            <option value="color" disabled>Color</option>
            <option value="color_1" >Color</option>
            <option value="color_2" >Color</option>
          </select>
        </div>
        <div className='row1-id cell-padding-10px'>
          <input
            id='id'
            className='form-control'
            placeholder='Id'
            onChange={this.changeFilters}
          />
        </div>
        <div className='row1-age cell-padding-10px'>
          <div className='filter-range-container'>
            <div className='filter-label'>
              Age
            </div>
            <div className='filter-range'>
              <Range
                min={0}
                max={10}
                allowCross={false}
                defaultValue={[0, 10]}
                handle={this.handle}
                onChange={(e: Array<number>) => {
                  this.changeFiltersSlider('age', e);
                }}
              />
            </div>
            <div className='filter-range-value'>
              {`${this.props.filters.age[0]}-${this.props.filters.age[1]}`}
            </div>
          </div>
        </div>
        <div className='row1-aplly cell-padding-10px'>
          <div className='filter-button-container'>
            <button
              className='btn'
              onClick={this.applyFilters}
            >
              Apply Filters
          </button>
          </div>
        </div>
        <div className='row1-clear cell-padding-10px'>
          <div className='filter-button-container'>
            <button
              className='btn'
              onClick={this.applyFilters}
            >
              Clear
          </button>
          </div>
        </div>

        {this.renderSlider()}
      </div>
    );
  }
}