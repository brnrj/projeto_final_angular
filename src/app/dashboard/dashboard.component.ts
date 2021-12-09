import { Component, OnInit } from '@angular/core';

import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private dados: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(dados => {
      this.dados = dados;
      this.init();
    });
  }

  init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages': ['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  exibirGraficos(): void {
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    this.exibirDonutChart();
  }

  exibirPieChart(): void {
    const element = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(element);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibir3dPieChart(): void {
    const element = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(element);
    const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  };

  exibirDonutChart(): void {
    const element = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(element);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  exibirBarChart(): void {
    const element = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(element);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirLineChart(): void {
    const element = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(element);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirColumnChart(): void {
    const element = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(element);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  obterOpcoes(): any {
    return {
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    }
  }
}
