#!usr/bin/env python #_processdata.py

def oFile(filename):
	file = open(filename, 'r')
	readfile = file.read()
	file.close()
	readlist = readfile.split('\n')
	
	list_of_dates = list()
	list_of_months = list()
	monthly_count = dict()

	for element in readlist:
		sublist = element.split(',')
		date = sublist[0]
		list_of_dates.append(date)
	for i in range(1, len(list_of_dates)):
		date = list_of_dates[i]
		month = date[5 : 7]
		list_of_months.append(float(month))
	for i in range(1, 13):
		count = list_of_months.count(i)
		monthly_count[str(i)] = count

	return monthly_count


def avgMonthly(list_of_dictionaries):
	dict_avg = dict()
	keys = list_of_dictionaries[0].keys()
	for key in keys:
		monthly_total = 0
		for dictionary in list_of_dictionaries:
			monthly_total += dictionary[key]
		monthly_avg = monthly_total / len(list_of_dictionaries)
		dict_avg[key] = monthly_avg
	return dict_avg


def scaleNum(dict_avg):
	min_num = min(values for values in dict_avg.values())
	max_num = max(values for values in dict_avg.values())
	for value in dict_avg.values():
		new_value = (10 - 1) / (max_num - min_num) * (value - min_num) + 1
		print("old val: " + str(value) + ", new val: %.2f" % new_value)



storm11 = oFile('storm/20110101_20120101.txt') 
storm12 = oFile('storm/20120101_20130101.txt')
storm13 = oFile('storm/20130101_20140101.txt')
storm14 = oFile('storm/20140101_20150101.txt')
storm15 = oFile('storm/20150101_20160101.txt')

hail11 = oFile('hail/20110101_20120101.txt')
hail12 = oFile('hail/20120101_20130101.txt')
hail13 = oFile('hail/20130101_20140101.txt')
hail14 = oFile('hail/20140101_20150101.txt')
hail15 = oFile('hail/20150101_20160101.txt')

list_storm = [storm11, storm12, storm13, storm14, storm15]
list_hail = [hail11, hail12, hail13, hail14, hail15]

storm_avg = avgMonthly(list_storm)
hail_avg = avgMonthly(list_hail)

scaleNum(storm_avg)
print("\n")

scaleNum(hail_avg)
print("\n")

print("storm: ")
print(storm_avg)
print("\n")
print("hail: ")
print(hail_avg)
print("\n")


def waterData(filename):
	file = open(filename, 'r')
	readfile = file.read()
	file.close()
	readlist = readfile.split('\n')

	for i in range(1, len(readlist)):
		sublist = readlist[i].split(',')
		monthly_num = list()
		monthly_num.append(sublist[0])
		for j in range(1, len(sublist)):
			if sublist[j] != "":
				daily_num = float(sublist[j]) / 1000
				scaled_num = (10 - 1) / (14 - 2) * (daily_num - 2) + 1
				monthly_num.append(round(scaled_num, 2))
		print(monthly_num)
		print("\n")


waterData('surface_water_data.csv')
