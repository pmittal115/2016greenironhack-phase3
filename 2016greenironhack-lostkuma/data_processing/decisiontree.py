#!usr/bin/env python #_dicisiontree.py
import math
import copy

# open file, read data into a list
file = open('weather_data_for_training.csv','r')
readfile = file.read()
file.close()
readlist = readfile.split('\n')
list_of_list = []
for element in readlist:
    sublist = element.split(',')
    list_of_list.append(sublist)
# create a list of dictionaries for each row
attribute_name = list_of_list[0]
element_num = len(list_of_list) - 1
list_of_dictionaries = []
for i in range(1, element_num):
    list_of_dictionaries.append(dict(zip(attribute_name, list_of_list[i])))


def entropy(attribute, list_of_dictionaries):
# calculate entropy of a certain attribute for a input dictionary
	entropy = 0.0
	value_list = []
	for dictionaries in list_of_dictionaries:
		value = dictionaries[attribute]
		if value not in value_list:
			value_list.append(value)

	for value in value_list:
		count = 0
		for dictionaries in list_of_dictionaries:
			if dictionaries[attribute] == value:
				count += 1
		prob = count / len(list_of_dictionaries)
		log = math.log2(prob)
		entropy += (- prob * log)

	return entropy


def group_on_attribute(attribute, list_of_dictionaries):
# split parent list into small list by attribute 
	output_lists = []
	value_list = []
	for dictionaries in list_of_dictionaries:
		value = dictionaries[attribute]
		if value not in value_list:
			value_list.append(value)

	sub_list = []
	for value in value_list:
		for dictionaries in list_of_dictionaries:
			if dictionaries[attribute] == value:
				sub_list.append(dictionaries)
		output_lists.append(sub_list)
		sub_list = []

	return output_lists


def calculate_information_gain(target_attribute, split_attribute, list_of_dictionaries):
    # information gain = entropy(parent) – [average entropy(children)]
    # use the entropy function to calculate entropy of current list of dictionaries for the target attribute
    # use the group_on_attribute to split the list of dictionaries into the children
    # calculate the entropy of each of the children and take the average
    parent_entropy = entropy(target_attribute, list_of_dictionaries)
    split_dictionaries = group_on_attribute(split_attribute, list_of_dictionaries)
    average_entropy = 0.0
    for sublist in split_dictionaries:
    	count = len(sublist)
    	child_entropy = entropy(target_attribute, sublist)
    	average_entropy += (count / len(list_of_dictionaries)) * child_entropy
    information_gain = parent_entropy - average_entropy
    return information_gain


def find_best_split_attribute(target_attribute, list_of_dictionaries):
	# create list of all attributes that are not the target attribute
    # iterate over each attribute, calculate the infomation gain of that attribute
    # check if its the max info gain, if so keep track of attribute
    # return the attribute
    attribute_list = []
    for key in list_of_dictionaries[0].keys():
    	if key != target_attribute:
    		attribute_list.append(key)
    attribute_list.sort()

    previous = calculate_information_gain(target_attribute, attribute_list[0], list_of_dictionaries)
    split_attribute = attribute_list[0]
    for i in range (1, len(attribute_list)):
    	current = calculate_information_gain(target_attribute, attribute_list[i], list_of_dictionaries)
    	if previous <= current:
    		split_attribute = attribute_list[i]
    		previous = current
    
    return split_attribute


class DecisionTreeNode(object):
	# build decision tree node and train
    def __init__(self, target_attribute, list_of_dictionaries):
        self.attribute = None
        self.children = dict()
        self.decision = None
        
        possible_values = []
        for dictionary in list_of_dictionaries:
            value = dictionary[target_attribute]
            if value not in possible_values:
                possible_values.append(value)
                
        if len(possible_values) == 1:
            self.decision = possible_values[0]
            return
        else:
        	self.decision = None
        
        split_attribute = find_best_split_attribute(target_attribute, list_of_dictionaries)
        self.attribute = split_attribute
        
        split_attribute_groups = group_on_attribute(split_attribute, list_of_dictionaries)
        for group in split_attribute_groups:
            split_attribute_value = group[0][split_attribute]
            self.children[split_attribute_value] = DecisionTreeNode(target_attribute, group)
            
    def print_tree(self, level=0):
        if self.decision is not None:
            print(("\t" * level) + "decision ->" + str(self.decision))
        else:
            print(("\t" * level) + "split on: " + str(self.attribute))
            for child_key in self.children:
                print(("\t" * (level + 1)) + str(child_key))
                self.children[child_key].print_tree(level + 2)
        
    def add_to_list_and_get_index(self, list_of_nodes):
    	self.index = len(list_of_nodes)
    	list_of_nodes.append(self)
    	
    	for child_key in self.children:
    		self.children[child_key].add_to_list_and_get_index(list_of_nodes)
    		
    def print_node_for_javascript(self):
    	print(str(self.index) + ' \\n \\')
    	if self.decision is not None:
    		print("true \\n \\")
    		print(str(self.decision) + ' \\n \\')
    	else:
    		print("false \\n \\")
    		print(str(self.attribute) + ' \\n \\')
    		print(str(len(self.children)) + ' \\n \\')
    		for child_key in self.children:
    			print(str(child_key) + ' \\n \\')
    			print(str(self.children[child_key].index) + ' \\n \\')
    		
    def print_index(self):
    	print(self.index)

    def make_decision(self, dictionary):
        if self.decision is not None:
            return self.decision
            
        value_of_decision_attribute = dictionary[self.attribute]
        return self.children[value_of_decision_attribute].make_decision(dictionary)



# process the new file
def calculateFreshness(list_of_dictionaries):
	# update dict with value from feature functions defined as follow
	for dictionary in list_of_dictionaries:
		rain = dictionary["RAIN"]
		if rain == "Y":
			dictionary["RAIN"] = 1.0
		elif rain == "N":
			dictionary["RAIN"] = 0.0
		else: 
			dictionary["RAIN"] = 0.0

		tmax = dictionary["TMAX"]
		if tmax == "?":
			dictionary["TMAX"] = 0.0
		else:
			tmax = float(tmax)
			if tmax < 0:
				dictionary["TMAX"] = -1.0
			elif 0 <= tmax < 150 or tmax >= 300:
				dictionary["TMAX"] = 0.0
			elif 150 <= tmax < 300:
				dictionary["TMAX"] = 1.0

		tmin = dictionary["TMIN"]
		if tmin == "?":
			dictionary["TMIN"] = 0.0
		else:
			tmin = float(tmin)
			if tmin < -100:
				dictionary["TMIN"] = -1.0
			elif -100 <= tmin < 50 or tmin >= 200:
				dictionary["TMIN"] = 0.0
			elif 50 <= tmin < 200:
				dictionary["TMIN"] = 1.0

		wind = dictionary["WIND"]
		if wind == "?":
			dictionary["WIND"] = 0.0
		else:
			wind = float(wind)
			if wind < 25.0:
				dictionary["WIND"] = 1.0
			elif 25.0 <= wind < 50.0:
				dictionary["WIND"] = 0.0
			elif wind >= 50.0:
				dictionary["WIND"] = -1.0

		snow = dictionary["SNOW"]
		if snow == "Y":
			dictionary["SNOW"] = -1.0
		elif snow == "N":
			dictionary["SNOW"] = 1.0

		month = float(dictionary["MONTH"])
		if month == 1 or month == 2 or month == 11 or month == 12:
			dictionary["MONTH"] = -1.0
		elif month == 3 or month == 7 or month == 8:
			dictionary["MONTH"] = 0.0
		else:
			dictionary["MONTH"] = 1.0

	# use updated dictionary to calculate freshness for training data and update the current dictionary
	attributes = list()
	for key in list_of_dictionaries[0].keys():
		attributes.append(key)
	for dictionary in list_of_dictionaries:
		freshness = float(dictionary["FRESHNESS"])
		for attribute in attributes:
			freshness += float(dictionary[attribute])
		freshness += 6
		rescaled_score = (10 - 1) / (12 - 1) * (freshness - 1) + 1
		for i in range(1, 13):
			if i <= rescaled_score < i + 0.5:
				rescaled_freshness = math.floor(rescaled_score)
			elif i + 0.5 <= rescaled_score < i + 1:
				rescaled_freshness = math.ceil(rescaled_score)
			else:
				continue
		dictionary["FRESHNESS"] = rescaled_freshness
	return list_of_dictionaries


training_data = calculateFreshness(list_of_dictionaries)
nodes = []
tree = DecisionTreeNode("FRESHNESS", training_data)
tree.add_to_list_and_get_index(nodes)
for node in nodes:
	node.print_node_for_javascript()
print(" ")


# inport test set and test on accuracy
def getTestData(list_of_dictionaries):
	for dictionary in list_of_dictionaries:
		del dictionary["FRESHNESS"]
	return list_of_dictionaries;

# process test file
file_test = open('weather_data_for_test.csv','r')
readfile_test = file_test.read()
file_test.close()
readlist_test = readfile_test.split('\n')
list_of_list_test = []
for element in readlist_test:
    sublist = element.split(',')
    list_of_list_test.append(sublist)
    
# create a list of dictionaries for each row
attribute_name_test = list_of_list_test[0]
element_num_test = len(list_of_list_test) - 1
list_of_dictionaries_test = []
for i in range(1, element_num_test):
    list_of_dictionaries_test.append(dict(zip(attribute_name_test, list_of_list_test[i])))

# tagged test set and input test set
test_data_tagged = calculateFreshness(list_of_dictionaries_test)
test_data_tagged_copy = copy.deepcopy(test_data_tagged)
test_data_input = getTestData(test_data_tagged)

# accuracy
count = 0
num_input = len(test_data_input)
for i in range(0, num_input):
	prediction = tree.make_decision(test_data_input[i])
	actual_value = test_data_tagged_copy[i]["FRESHNESS"]
	if float(prediction) == float(actual_value):
		count += 1
accuracy = count / num_input * 100
print("accuracy is: " + str(accuracy) + "%")



# test area
# predicted_freshness = tree.make_decision({'SNOW': -1.0, 'RAIN': 0.0, 'TMAX': -1.0, 'TMIN': -1.0, 'MONTH': -1.0, 'WIND': -1.0})
# print(predicted_freshness)


# for the weather data, define some feature functions
# the feature functions are define as below

# RAIN = 
#	+1 if Y
#	 0 if N

# TMAX (in tenth of C) = 
#	-1 if        x < 0
#	 0 if   0 <= x < 150
#	+1 if 150 <= x < 300
#	 0 if 		 x >= 300

# TMIN (in tenth of C) = 
# 	-1 if       x < -100
#	 0 if -100 <= x < 50
#	+1 if   50 <= x < 200
# 	 0 if 		  x >= 200

# WIND (km) = 
# 	+1 if       x < 25
#	 0 if 25 <= x < 50
#	-1 if       x >= 50

# SNOW = 
#	-1 if Y
#	+1 if N

# MONTH = 
#	-1 if x = 1, 2, 11, 12
#	 0 if x = 3, 7, 8
#	+1 if x = 4, 5, 6, 9, 10

# use 0 for all "?"


# use the feature functions to calculate a freshness score that's affected by weathers
# the score is initiated to be 0, then use feature function to do calculation
# normalize the score to fit the 1 to 10 scale 
# function for normalization:
# new_score = (10 - 1) / (12 - 1) * (x - 1) + 1 then take 0.5 to floor up/down
# then add the data to fit the required format of decision tree and train
# retrive selected attribute, each node, map of value to children
# add the retrived weights to jacascript for prediction!

